#[macro_use]
extern crate rocket;

mod controllers;

#[rocket::main]
async fn main() {
    rocket::build()
        .mount("/api", routes![
            controllers::test::get_test
        ])
        .launch()
        .await;
}
