const MainList = ({ companies }) => {
    return ( <
        div >
        <
        hr / >
        This is the stateless child comonent with list <
        ul > {
            companies.Name
        } <
        /ul>  < /
        div >
    );
};

export default MainList;