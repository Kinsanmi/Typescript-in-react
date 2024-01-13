import React, { Children } from 'react';
import '../src/ful.scss';

const Heading = () => <h1>Function Above</h1>

const Intro = ({title}: {title: string}) => <h1>{title}</h1>;

const Box: React.FunctionComponent<{children: string}> = ({children}) => (
  <div className='old'>
  {children}
  </div>
)


const Data:React.FunctionComponent<{message: string}> = ({message}) =>(
  <p>{message}</p>
)

const List: React.FunctionComponent<{
  items: string[];
}> = ({items}) => (
  <ul>
    {items.map((item, i)=>(
      <a href="" key={i}>{item}</a>
    ))}
  </ul>
)


const Names: React.FunctionComponent<{sets: string | number}> = ({sets}) =>(
  <h1>{sets}</h1>
)


function App() {
  return (
    <div className="App">
      <Heading />
      <Intro  title="Introduction"/>

      <Box >Welcome</Box>

      <List items={["1", "2", "3"]} />

      <Data message='Searching list' />

      <Names sets="2015" />
    
    </div>
  );
}

export default App;
