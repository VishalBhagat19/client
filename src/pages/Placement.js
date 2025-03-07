import React, { useEffect, useState } from 'react'
import './Placement.css'
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import Cardfeedback from '../component/feedback/Cardfeedback';
import Layout from '../component/layouts/Layout'
import StudentFeedback from './admin/StudentFeedback';
import PlacementFeedback from './PlacementFeedback';
function Placement() {

  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/auth/viewfeedback");
      // console.log(response);
      const fetchedBlogs = response.data.data;
      console.log(fetchedBlogs);
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout title={'Placement'}>
         <div class="container-fluid p1" >
  <div class="container">
    <div class="row">
      
    </div>
  </div>
</div>
<div class="container-fluid p3" >
  <div class="container">
    <div class="row">
    <h1 class="text-center text-black mt-4"><span className='z'>Placement</span> @ GWALIOR UNIVERSITY</h1>
    <br/><br/>
    <h6 class="mt-4">Today, for good reason, most academic exercises are also industry facing. It is much the same at Bennett University. The career services cell here spares no effort in bringing industry opportunities to the students of all the six schools. These opportunities come by way of internships, workshops, placement camps and such other. The cell also enables students to attend summer schools in various partner universities abroad to help them gain international exposure. Besides, the cell also organises various innovative programs to encourage students to come up with novel ideas for entrepreneurship.</h6>
    </div>
  </div>
</div>
<div class="container-fluid ">
  <div class="container">
    <div class="row">
      <h1 class="title text-center mt-4">statistics</h1>
      <div class="col-md-6">
        <h6 class="text-center mt-4 ">COMPANIES RECRUITING AT GWALIOR UNIVERSITY</h6>
        <img src="https://gwalior-university01.netlify.app/images/placements/graph1.png" class="w-100"/>
      </div>
      <div class="col-md-6">
        <h6 class="text-center  mt-4">HIGHEST DOMESTIC PACKAGE AT GWALIOR UNIVERSITY</h6>
        <img src="https://gwalior-university01.netlify.app/images/placements/graph2.png" class="w-100"/>
      </div>
      </div>
    </div>
  </div>

<div class="container-fluid ">
  <div class="container">
    <div class="row">
      <div class="col-md-6 p2 mt-4">
        <h1>Mechanical, Mechatronics, Aerospace and Automobile Engineering</h1>
        <br/><br/>
        <p>On the merits of their hard work and potential in terms of Computer Science Engineering, the brilliant students of Chandigarh University have set a new benchmark by securing an international package of Rs. 1.7 CR and a national package of Rs. 52.11 LPA. IT giants such as Microsoft, IBM, SAP Labs, Hewlett Packard visited CU and recruited more than 2030 CSE/IT Engineering students. World’s top IT giant Microsoft selected Computer Science and IT Engineering students consecutively for last three years, while number the selections have increased three times and touched 15. India’s leading IT Company Wipro (394), Capgemini (217), Mindtree (101) while the global IT giant IBM also selected record number of 196 engineering students which is highest number of selections made in any campus in North India.</p>
        <img src="https://gwalior-university01.netlify.app/images/placements/1.png" class="image-fluid w-100"/>
      </div>
      <div class="col-md-6 p2 mt-4">
        <h1>Computer Science and IT branches leads campus placements<br/> at GU</h1>
        <p>On the merits of their hard work and potential in terms of Computer Science Engineering, the brilliant students of Chandigarh University have set a new benchmark by securing an international package of Rs. 1.7 CR and a national package of Rs. 52.11 LPA. IT giants such as Microsoft, IBM, SAP Labs, Hewlett Packard visited CU and recruited more than 2030 CSE/IT Engineering students. World’s top IT giant Microsoft selected Computer Science and IT Engineering students consecutively for last three years, while number the selections have increased three times and touched 15. India’s leading IT Company Wipro (394), Capgemini (217), Mindtree (101) while the global IT giant IBM also selected record number of 196 engineering students which is highest number of selections made in any campus in North India.</p>
        <img src="https://gwalior-university01.netlify.app/images/placements/2.png" class="image-fluid w-100"/>
      </div>
      
      </div>
    </div>
  </div>

<br/><br/><br/><br/><br/><br/>

<div class="container-fluid " >
  <div class="container">
    <div class="row">
      <h1 class="title text-center">OUR PARTNERS</h1>
      <br/><br/><br/><br/><br/><br/>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l1.jpg"/>
     </div>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l2.jpg"/>

     </div>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l3.jpg"/>

     </div>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l4.jpg"/>

     </div>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l5.jpg"/>

     </div>
     <div class="col-md-2">
       <img src="https://gwalior-university01.netlify.app/images/placements/l6.jpg"/>

     </div>
    </div>
  </div>
</div>

<div class="container-fluid ">
  <div class="container">
    <div class="row">
      <br/><br/><br/><br/><br/>
      <h1 class="title text-center mt-4">statistics</h1>
      <div class="col-md-6">
        <h6 class="text-center mt-4 ">COMPANIES OFFERING CTC OF 5 LAKHS AND ABOVE</h6>
        <img src="https://gwalior-university01.netlify.app/images/placements/graph3.png" class="w-100"/>
      </div>
      <div class="col-md-6">
        <h6 class="text-center  mt-4">TOP RECRUITERS IN RECENT YEARS</h6>
        <img src="https://gwalior-university01.netlify.app/images/placements/graph4.png" class="w-100"/>
      </div>
      </div>
    </div>
  </div>

<div className='container-fluid'>
  <div className='row'>
    <PlacementFeedback/>
  <h1 class="title text-center mt-4">Some Feedbacks</h1>
  <Container className="d-flex flex-wrap my-5">
        {blogs.map((blog) => (
          <Col key={blog._id} md={4} className="mb-3">
            <Cardfeedback
              title={blog.title}
              description={blog.description}
              image={blog.image?.url}
              style={{ height: "100%" }}
            />
          </Col>
        ))}
      </Container>
      </div>
</div>
</Layout>
  )
}

export default Placement