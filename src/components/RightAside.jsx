export default function RightAside({recipes}){
    const averageCookTime = recipes.reduce((acc,{minutesToCook:time},i)=>{
        if(i === recipes.length-1){
            acc += time
            acc /= i + 1
            acc = Math.round(acc)
        }else{
            acc+= time
        }
        return acc
    },0)

    const chefContribution = recipes.reduce((acc,{chef:chef})=>{
        acc[chef] = (acc[chef]||0) + 1
        return acc
    },{})

    console.log(chefContribution)
    return (
        <aside>
        <h2>Average Cook Time:~{averageCookTime} minutes</h2>
        <ul>
            {Object.entries(chefContribution).map(([chef,contributions])=> contributions > 1 ? <li key={chef}>{chef} has contributed {contributions} meals. </li>:<li key={chef}>{chef} has contributed {contributions} meal. </li>)}
        </ul>
        </aside>
    )
}