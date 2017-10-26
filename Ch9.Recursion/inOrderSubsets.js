//Return an array with every possible in-order character subset of str.

const inOrderSub = (str) => {
    let subs = [];
    let sub = '';
    let subset = (str, holder) => {
      if (str.length === 0) {
        if (subs.includes('')) {
          return;
        }
        else {
          subs.push('');
        }
      }
      for (let i = 0; i < str.length; i++) {
        holder += str[i];
        subs.push(holder);
        if (holder.length >= 3) {
          let slicer = holder;
          while(slicer.length >= 3) {
            slicer = slicer[0] + slicer.slice(2);
            subs.push(slicer);
          }
        }
      }
      holder = ''
      subset(str.slice(1), holder);
    }
    subset(str, sub);
    return(subs);
  }
  
  console.log(inOrderSub('abc'))