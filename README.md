# protect-a-deck

Protect an MDX deck from invaders 👾

![example of a protected deck](https://user-images.githubusercontent.com/6516758/74079437-79625200-4a05-11ea-9c65-5f7caf7cd6d3.png)


---

Uses https://paassword.now.sh to safely store your password and then allows a static site to check against it at will.

## Installation

`yarn add protect-a-deck`

## Usage

See details on how to extend the mdx-deck `Provider` here: https://github.com/jxnblk/mdx-deck/blob/master/docs/advanced.md#custom-provider-component

1. Go to https://paassword.now.sh and get a link that will look like: `https://svrlss.now.sh/api/get/rec3T73O3WNZk3IZj`

2. Copy the last part, the id, of the url. Which would be `rec3T73O3WNZk3IZj` from above.

3. Extend the provider for mdx-deck like the example below passing in your id from step 2.

```JavaScript
// example Provider.js
import React from 'react'
import Protection from 'protect-a-deck'
import { useDeck } from 'mdx-deck'

export default props => {
  const state = useDeck()

  return (
    <Protection paassword="rec3T73O3WNZk3IZj" deckState={state}>
      {props.children}
    </Protection>
  )
}
```

## Running the example

`yarn present` or `npm run present`

> the password for the example is `dev.to`
