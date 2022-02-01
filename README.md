# UIGenie

A library for data-schema based UI generation in React applications.

## UIGenieView

`UIGenieView` renders given `data` using `schema` for validation and `componentsMap` to know how to render it

### Installation
```
npm install --save ui-genie
```

### Usage
```tsx
() => (
	<UIGenieView
		schema={schema}
		data={data}
		componentsMap={componentsMap}
	/>
)
```

## UIGenieItems and UIGenieFields

As data is usually presented as either an array or an object, the library exports two additional components: `UIGenieItems` for arrays and `UIGenieFields` for object.


## ComponentsMap

In order to know how to render your `data` elements, the `UIGenieView` components needs to receive a `ComponentsMap` instance. It's basically an array of objects that describe `type` - `component` pairs.

You need to create a new `ComponentsMap` using `name` and then use `addItem` and `removeItem` to add or remove items, respectively.

### Usage
```tsx
const componentsMap = new ComponentsMap('list-view')

componentsMap.addItem({
	name: 'collection',
	type: 'array',
	component: (props: UIGenieProps) => (
		<UIGenieItems {...props}/>
	)
})
componentsMap.addItem({
	name: 'fields',
	type: 'object',
	component: (props: UIGenieProps) => (
		<div className='item'>
			<UIGenieFields {...props}/>
		</div>
	)
})
componentsMap.addItem({
	name: 'stringField',
	type: 'string',
	component: ({data}: UIGenieProps) => (
		<b className='item-name'>{data}</b>
		)
})
componentsMap.addItem({
	name: 'numberField',
	type: 'integer',
	component: ({data}: UIGenieProps) => (
		<div className='item-age'><i>{data} years</i></div>
	)
})
```

## Schema

`UIGenie` supports `JSONSchema` schemas version 6 and above.

## Demo

You can find the demo app [here](https://github.com/stelmakh/ui-genie-demo)
