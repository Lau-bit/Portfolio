import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import ProfileComponent from './Components/ProfileComponent';
import Education from './Components/Education';
import Languages from './Components/Languages';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <ProfileComponent/>
      <h2 className="header">Education:</h2>
      <Education title="Bachelor of Business Administration, Data Processing, Laurea University of Applied
Sciences." time= "2021-2023, graduated."></Education>
      <Education title="Vocational upper secondary qualification, yard construction and gardening, Omnia
vocational college." time="2015-2018, graduated."></Education>
      <h2 className="header">Work experience:</h2>
      <Experience title="Vantaa Vocational College Varia" type="Programming teacher, part-time" time="Current since 18.9.2023"></Experience>
      <Experience title="Laurea University of Applied Sciences" type="Paid internship involving tech support and varied project work, full-time" time="23.1.2023-30.6.2023"></Experience>
      <Experience title="Niemi Palvelut" type="Truck driver, full-time" time="25.7.2019-31.12.2020"></Experience>
      <Experience title="Koiviston Vihertyö" type="Yard Construction Work, full-time" time="5.6.2017-17.10.2017 & 23.4.2018-3.7.2018"></Experience>
      <Languages/>
      <Footer/>
    </div>
  );
}

export default App;
