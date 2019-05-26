class Contact {
    constructor(name,email,phone,organization,message) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.organization = organization; 
        this.message = message;
    }
    getAddContactSQL() {
        let sql = `INSERT INTO nsia_contacts(fullname, email, phone, organization, message) \
                   VALUES('${this.name}','${this.email}','${this.phone}','${this.organization}','${this.message}')`;
        return sql;           
    }  
}

module.exports = Contact;