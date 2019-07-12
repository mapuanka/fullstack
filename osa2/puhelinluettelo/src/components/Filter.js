import React from 'react'

const Filter = (props) => {

return(
<div>
<input value={props.showFiltered} onChange={props.handleFilter}/>
</div>
)

}

export default Filter