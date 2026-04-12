function getAnimationParams({
 pos,
 total,
 gapFactor,
 scrollerHeight,
 gap,
 totalTime = 6,
}: {
 pos: number;
 total: number;
 gapFactor: number;
 scrollerHeight: number;
 gap: number;
 totalTime?: number;
}) {
 // Dynamic positions array - creates pattern like [60, 40, 20, 0, 20, 40, 60, 80]
 const positions = (() => {
  const halfTotal = Math.floor(total / 2);
  const posArray = [];

  // Start from the maximum position and go down to 0
  for (let i = halfTotal; i >= 0; i--) {
   posArray.push(i * gap);
  }

  // Add the mirror positions (going back up, excluding 0)
  for (let i = 1; i <= halfTotal; i++) {
   posArray.push(i * gap);
  }

  // Add the extra entry to the right
  posArray.push((halfTotal + 1) * gap);

  return posArray;
 })();

 // X Offset
 const middleIndex = Math.floor(total / 2);
 const xOffset = pos === middleIndex ? 0 : Math.abs(pos - middleIndex) * gap;

 // X Offsets
 const positionsAtKeyframes = positions.slice(pos);

 // Y Offset - Fixed calculation
 const availableHeight = scrollerHeight - gapFactor;
 const itemHeight = availableHeight / total;

 // Calculate yOffset: position * (itemHeight + gap)
 const yOffset = pos * (itemHeight + gap);

 // Path Length
 const remainingDistance = scrollerHeight - yOffset;
 const pathLength = yOffset + remainingDistance;

 // Time
 const timeUnit = totalTime / total;
 const time = totalTime - pos * timeUnit;

 // Times array
 const times = (() => {
  const keyframes = [];
  const part = 1 / positionsAtKeyframes.length;
  for (let j = 0; j <= positionsAtKeyframes.length; j++) {
   keyframes.push(j * part);
  }
  return keyframes;
 })();

 return {
  xOffset,
  positionsAtKeyframes,
  yOffset,
  pathLength,
  time,
  times,
 };
}

export default getAnimationParams;
