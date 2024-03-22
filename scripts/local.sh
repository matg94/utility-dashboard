cd client
npm run build
cd ..

cp -r client/build backend/target/frontend_build
cd backend

cargo run backend
