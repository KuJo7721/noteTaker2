const express = require('express');
const path = require('path');
const db = require("./db/db.json");
console.log(db);

const PORT = process.env.port || 3001;

const app = express();