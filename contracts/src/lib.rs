#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol, symbol_short};

#[contracttype]
#[derive(Clone)]
pub struct Donation {
    pub donor: Address,
    pub recipient: Address,
    pub amount: i128,
}

const DONATIONS: Symbol = symbol_short!("DONATIONS");

#[contract]
pub struct DonationContract;

#[contractimpl]
impl DonationContract {
    pub fn donate(env: Env, donor: Address, recipient: Address, amount: i128) -> i128 {
        donor.require_auth();
        
        let donation = Donation {
            donor: donor.clone(),
            recipient: recipient.clone(),
            amount,
        };
        
        let mut donations: soroban_sdk::Vec<Donation> = env
            .storage()
            .instance()
            .get(&DONATIONS)
            .unwrap_or(soroban_sdk::Vec::new(&env));
        
        donations.push_back(donation);
        env.storage().instance().set(&DONATIONS, &donations);
        
        amount
    }
    
    pub fn get_total_donations(env: Env) -> i128 {
        let donations: soroban_sdk::Vec<Donation> = env
            .storage()
            .instance()
            .get(&DONATIONS)
            .unwrap_or(soroban_sdk::Vec::new(&env));
        
        let mut total = 0i128;
        for donation in donations.iter() {
            total += donation.amount;
        }
        total
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use soroban_sdk::testutils::Address as _;
    use soroban_sdk::Env;

    #[test]
    fn test_donate() {
        let env = Env::default();
        let contract_id = env.register_contract(None, DonationContract);
        let client = DonationContractClient::new(&env, &contract_id);

        let donor = Address::generate(&env);
        let recipient = Address::generate(&env);
        
        env.mock_all_auths();
        
        let amount = client.donate(&donor, &recipient, &1000);
        assert_eq!(amount, 1000);
    }

    #[test]
    fn test_get_total_donations() {
        let env = Env::default();
        let contract_id = env.register_contract(None, DonationContract);
        let client = DonationContractClient::new(&env, &contract_id);

        let donor1 = Address::generate(&env);
        let donor2 = Address::generate(&env);
        let recipient = Address::generate(&env);
        
        env.mock_all_auths();
        
        client.donate(&donor1, &recipient, &500);
        client.donate(&donor2, &recipient, &300);
        
        let total = client.get_total_donations();
        assert_eq!(total, 800);
    }
}
