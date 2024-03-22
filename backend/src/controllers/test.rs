use rocket::{get};

#[get("/")]
pub async fn get_test() -> &'static str {
    "Hello, world!"
}

