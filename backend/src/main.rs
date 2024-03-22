#[macro_use]
extern crate rocket;

mod controllers;
use rocket::fs::FileServer;

#[rocket::main]
async fn main() {
    rocket::build()
        .mount("/api", routes![
            controllers::test::get_test
        ])
        .mount("/", FileServer::from("static"))
        .launch()
        .await;
}
