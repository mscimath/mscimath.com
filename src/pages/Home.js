import {Routes, Route} from 'react-router-dom';
import SubjectsMenu from '../components/SubjectsMenu';
import MainTitle from '../components/MainTitle';
import TitleAddition from '../components/TitleAddition';

export default function Home(){
    return (
        <>
        <section id='home' className='simple'>
        <MainTitle/> 
        <TitleAddition />
        
        </section>
        
            <section id ="subjects" className="simple">
            
            <Routes>
              <Route index element={<SubjectsMenu />}/>
            </Routes>
            </section>
        </>
    )
}