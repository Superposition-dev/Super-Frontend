export function toggleLike(postId: number) {
  // 로컬 스토리지에서 사용자의 좋아요 상태를 가져옴
  const likedPosts = JSON.parse(String(localStorage.getItem('likedPosts'))) || [];

  // 게시물이 이미 좋아요를 누른 상태인지 확인
  const isLiked = likedPosts.includes(postId);
  if (isLiked) {
    // 이미 좋아요를 누른 경우, 좋아요 상태를 해제하고 로컬 스토리지에서 제거
    likedPosts.splice(likedPosts.indexOf(postId), 1);
  } else {
    // 아직 좋아요를 누르지 않은 경우, 좋아요 상태를 추가하고 로컬 스토리지에 저장
    likedPosts.push(postId);
  }
  localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  return !isLiked;
}

export function checkLog(key:string,postId:number){
  const postIdLog = JSON.parse(String(localStorage.getItem(key))) || [];
  const isLiked = postIdLog.map((id:number) => id === postId).includes(true);
  if (isLiked)return true;
  
  localStorage.setItem(key, JSON.stringify(postIdLog));
  return false;
}

export function setLocalStorageTimer(key:string, value:number, time:number){
  const now = new Date();
  const item = {
    value: value,
    expireTime: now.getTime() + time,
  };

  localStorage.setItem(key, JSON.stringify(item));
}