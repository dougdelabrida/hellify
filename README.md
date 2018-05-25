# (((༼•̫͡•༽)))

Hellify allows you to write CSS using XPath selector.

## Usage example

```
import { hell } from '../hellify';

hell(style => {
  style(`//*[@id="tab-pane-0"]/table[2]/tbody/tr/td/input[2]/..`, {
    display: 'flex',
    flexDirection: 'column',
    background: 'red'
  })
})
```