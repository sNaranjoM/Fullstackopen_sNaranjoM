
import Header from './header/Header'
import Content from './content/Content'
import Total from './total/Total'

const Course = ({props})=>{

    return (

        <div>
            <Header name={props.name} />
            <Content parts={props.parts}  />
            <Total parts={props.parts}  />
        </div>
        
    )

}

export default Course