const Header = (course) => {
	return(
		<h1>{course.course}</h1>
	)
}

const Part = (content) => {
	return(
		<p>
			{content.part} {content.exercises}
		</p>
	)
}

const Content = (content) => {
	return(
		<>
			<Part part={content.part1.name} exercises={content.part1.exercises}/>
			<Part part={content.part2.name} exercises={content.part2.exercises}/>
			<Part part={content.part3.name} exercises={content.part3.exercises}/>
		</>

	)
}

const Total = (total) => {
	return(
		<p>Number of exercises {total.total}</p>
	)
}

// added a comment!
const App = () => {
	const course = "Half Stack application development"
	const parts = [
		{
		name: "Fundamentals of React",
		exercises: 10
		},
		{
		name:"Using props to pass data",
		exercises: 7
		},
		{
		name:"State of a component",
		exercises:14
		}
	]
	

	return (
		<div>
			<Header course={course}/>
			<Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
			<Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
		</div>
	)
}

export default App