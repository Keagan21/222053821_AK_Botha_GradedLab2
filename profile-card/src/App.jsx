import React from 'react'
import ProfileCard from './ProfileCard'

export default function App() {

  return(
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',gap: '20px',paddingTop: '30px'}}>
      <ProfileCard
        image="https://avatar.iran.liara.run/public/48"
        name="Keagan Botha"
        title="Web developer"
        bio="A passionate web developer who loves developing websites."/>
      <ProfileCard
        image="https://avatar.iran.liara.run/public/44"
        name="Aaron Botha"
        title="UI/UX Designer"
        bio="I am a UI/UX designer that will make your website look attractive."/>
        
    </div>
   
  );


}
