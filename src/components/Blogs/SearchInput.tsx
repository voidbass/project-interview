import React, { useState } from 'react'

const SearchInput = (props: any) => {
	const { onChange, value } = props
	return (
		<input value={value} onChange={onChange} />
	)
}

export default SearchInput