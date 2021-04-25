## Setup App 
Jalankan ini untuk install package
```
npm install
yarn install
```
Copy `.envexample` menjadi `.env` kemudian sesuaikan credential dengan project masing - masing. Disini sudah menggunakan container docker dengan nama `demo-postgre`<br>
Jika belum memiliki database silahkan jalankan 
```
npx sequelize-cli db:create
```
Lakukan migration dan seeder :
```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
Menjalankan aplikasi :
```
npm run start
```

## Dockerizing App
Build Node App menjadi images
```
docker build -t harlitad/demo-node .
```
Membuat container node app
```
docker run --name demo-node -p 3000:3000 --env-file envlist harlitad/demo-node
```
Buatlah docker network untuk menghubungkan container `demo-node` dan container `demo-postgre`
```
docker network create demo-node-postgre
docker network connect demo-node-postgre demo-node
docker network connect demo-node-postgre demo-postgre
```