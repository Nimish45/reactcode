import Parse from "parse";

const getAllCompanies = async() => {
    const Company = Parse.Object.extend('Company');
    const query = new Parse.Query(Company);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
        return await query.find();
        // it always returns an array

    } catch (error) {
        console.error('Error while fetching Company', error);
    }
};

export default getAllCompanies;