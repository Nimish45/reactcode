import { useEffect, useState } from "react";
//import { getAllUsers } from "../../Services/Users";
import getAllCompanies from "./../../Services/Company";
import MainList from "./MainList";


function Main() {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getAllCompanies().then((companies) => {
            console.log('companies: ', companies);
            const name = companies[0].get("Name"); //.0 companies is technically an array
            console.log("name: ", name);
            setCompanies(companies);

        });
    }, []);

    return ( <
        div >
        <
        h1 > Feature 3 Kickoff < /h1>
        This is the stateful parent component.

        <
        MainList companies = { companies }
        />    < /
        div >

    );
}

export default Main;