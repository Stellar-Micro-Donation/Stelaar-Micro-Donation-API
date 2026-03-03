#![cfg(test)]
use super::*;
use soroban_sdk::testutils::Address as _;
use soroban_sdk::Env;

#[test]
fn test_multiple_donations() {
    let env = Env::default();
    let contract_id = env.register_contract(None, DonationContract);
    let client = DonationContractClient::new(&env, &contract_id);

    let donor1 = Address::generate(&env);
    let donor2 = Address::generate(&env);
    let donor3 = Address::generate(&env);
    let recipient = Address::generate(&env);
    
    env.mock_all_auths();
    
    client.donate(&donor1, &recipient, &100);
    client.donate(&donor2, &recipient, &200);
    client.donate(&donor3, &recipient, &150);
    
    let total = client.get_total_donations();
    assert_eq!(total, 450);
}
