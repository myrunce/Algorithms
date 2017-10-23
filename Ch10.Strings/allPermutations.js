let allPerm = (str) => {
    let perms = []
    let perm = ''
    
    let permutate = (word, holder) => {
      if (!word) {
        perms.push(holder);
      }
      for (let i = 0; i < word.length; i++) {
        holder += word[i];
        permutate(word.slice(0,i) + word.slice(i+1), holder);
        holder = holder.slice(0, holder.length - 1)
      }
    }
    
    permutate(str, perm);
    return perms;
  }
  
  console.log(allPerm('ABC'));