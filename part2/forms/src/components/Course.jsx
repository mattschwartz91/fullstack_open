const Course = ({course}) => {
    const total = course.parts.reduce((part, currentVal)=> {
        return part + currentVal.exercises
    }, 0)

    return(
        <>
            <h1>{course.name}</h1>
            {course.parts.map((part)=>
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            )}
            <h3>Total {total} exercises</h3>
        </>
    )
}

export default Course