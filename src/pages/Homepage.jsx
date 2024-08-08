import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import VIewAllJobs from '../components/VIewAllJobs'

const Homepage = () => {
  return (
    <>
    <Hero ></Hero>
    <HomeCards></HomeCards>
    <JobListings isHome = {true}></JobListings>
    <VIewAllJobs>View All Jobs</VIewAllJobs>
    </>
    
  )
}

export default Homepage