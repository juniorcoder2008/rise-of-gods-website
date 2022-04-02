import React from 'react';
import './About.sass';
import TeamMate from './TeamMate/TeamMate';

const About = () => {

  const team = [
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
    {first: 'Samuel', last: 'Thomas', img: 'https://picsum.photos/500/500', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo'},
  ]

  return (
    <div id='about'>
      <h1>Über uns</h1>

      <div className="team-mate-list">
        {team.map(mate => {
          return <TeamMate first={mate.first} last={mate.last} img={mate.img} description={mate.description} />
        })}
      </div>
    </div>
  )
}

export default About