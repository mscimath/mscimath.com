import { HashLink } from 'react-router-hash-link';
import './SubjectsMenu.css';

export default function SubjectsMenu(){
    const menuItems = [
        {Physics : [
            {
                "link": "/javascript",
                "id": 1,
                "linkTekst": "JavaScript"
            },
            {
                "link": "/python",
                "id": 2,
                "linkTekst": "Python"
            },
            {
                "link": "/cpp",
                "id": 3,
                "linkTekst": "C++"
            },
            {
                "link": "/data_science",
                "id": 4,
                "linkTekst": "Data Science"
            }
        ]}, 
        {Mathematics : [
            {
                "link": "/javascript",
                "id": 1,
                "linkTekst": "JavaScript"
            },
            {
                "link": "/python",
                "id": 2,
                "linkTekst": "Python"
            },
            {
                "link": "/cpp",
                "id": 3,
                "linkTekst": "C++"
            },
            {
                "link": "/data_science",
                "id": 4,
                "linkTekst": "Data Science"
            }
        ]}, 
        {CSandP : [
            {
                "link": "/javascript",
                "id": 1,
                "linkTekst": "JavaScript"
            },
            {
                "link": "/python",
                "id": 2,
                "linkTekst": "Python"
            },
            {
                "link": "/cpp",
                "id": 3,
                "linkTekst": "C++"
            },
            {
                "link": "/data_science",
                "id": 4,
                "linkTekst": "Data Science"
            }
        ]}
        
    ]
    const CSandP = menuItems[2].CSandP
    return(
        <>
            <h1>Science & Maths Site</h1>
            <p>Discover new things on:</p>
            <table className="theory-subjects" id="subjects-table">
                <tbody>
                    <tr><th rowSpan="2">Physics</th><td><a href="/physics">School Physics</a></td></tr>
                    <tr><td><a href="/relativity">Relativity</a></td></tr>
                    <tr><th>Mathematics</th><td><a href="menuItems/mathematics/schoolmathematics.html">School Mathematics</a></td> </tr>
                    <tr><th rowSpan="4">Computer Science & Programming</th>
                    {CSandP.map( (subItem) => (
                        <tr key={subItem.id}>
                            <td>
                                <HashLink to={subItem.link}>{subItem.linkTekst}</HashLink>
                            </td>
                        </tr>
                    ) )}
                    </tr>
                </tbody>
            </table>
            <div className="section-footer"></div>
        </>
    )
}