import fs from "fs/promises";
import crypto from "crypto";

class UserManager {
    constructor(file) {
        this.file = file;
    }

    async createUser(user) {
        user.pass = crypto.createHash("sha256")
    }

    async validateUser(user, pass) {}