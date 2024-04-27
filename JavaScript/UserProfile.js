class UserProfile {
    constructor(username, email, birthdate) {
        this._username = this.scanUsername(username);
        this._email = this.scanEmail(email);
        this._birthdate = this.scanBirth(birthdate);
    }

    scanUsername(user) {
        if (user !== "" && typeof user == "string") {
            return user;
        } else {
            throw new Error('Invalid username.');
        }
    }
    
    scanEmail(mail) {
        if (mail.indexOf("@") != -1) {
            return mail;
        } else {
            throw new Error('Invalid email.');
        }
    }
    
    scanBirth(birth) {
        if(!isNaN(Date.parse(birth))) {
            return birth;
        } else {
            throw new Error('Invalid birthdate.');
        }
    }
    
    get username() {
        return this.scanUsername(this._username);
    }
    
    get email() {
        return this.scanEmail(this._email);
    }
    
    get birthdate() {
        return this.scanBirth(this._birthdate);
    }
    
    set username(user) {
        this._username = this.scanUsername(user);   
    }
    
    set email(mail) {
        this._email = this.scanEmail(mail);   
    }
    
    set birthdate(birth) {
        this._birthdate = this.scanBirth(birth);   
    }
}