function getLoopedAnimationParams({
 pos,
 total,
 time,
 gap,
 distance,
}: {
 pos: number;
 total: number;
 time: number;
 gap: number;
 distance: number;
}) {
 const positionsAtKeyframes = (() => {
  const halfTotal = Math.floor(total / 2);
  const posArray = [];

  posArray.push((halfTotal + 1) * gap);

  for (let i = halfTotal; i >= 0; i--) {
   posArray.push(i * gap);
  }

  for (let i = 1; i <= halfTotal; i++) {
   posArray.push(i * gap);
  }

  posArray.push((halfTotal + 1) * gap);

  return posArray;
 })();

 // X Offset
 const middleIndex = Math.floor(total / 2);
 const xOffset = pos === middleIndex ? 0 : Math.abs(pos - middleIndex) * gap;

 // Delay
 const speed = distance / time;
 const timeUnit = time / total;
 const delay = (total - 1 - pos) * timeUnit + gap / speed;

 // Times array
 const times = (() => {
  const keyframes = [];
  for (let j = 0; j <= positionsAtKeyframes.length; j++) {
   keyframes.push(time);
  }
  return keyframes;
 })();

 return {
  xOffset,
  positionsAtKeyframes,
  time,
  times,
  delay,
 };
}

export default getLoopedAnimationParams;
