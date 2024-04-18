import React, { useState, useEffect } from 'react'
import { Text } from '@visx/text'
import { scaleLog } from '@visx/scale'
import Wordcloud from '@visx/wordcloud/lib/Wordcloud'
import { skills } from '../../../../constants'

export interface WordData {
  text: string
  value: number
}

const colors = ['var(--main-accent-color)', 'var(--main-accent-shadow)', 'var(--main-accent-extended)']

function wordFreq(text: string): WordData[] {
  const words: string[] = text.replace(/\./g, '').split(/\s/)
  const freqMap: Record<string, number> = {}

  for (const w of words) {
    if (!freqMap[w]) freqMap[w] = 0
    freqMap[w] += 1
  }
  return Object.keys(freqMap).map((word) => ({ text: word, value: freqMap[word] }))
}

const words = wordFreq(skills)

const fontScale = scaleLog({
  domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
  range: [10, 100],
})
const fontSizeSetter = (datum: WordData) => fontScale(datum.value)

const fixedValueGenerator = () => 0.5

export default function SkillsCloud() {
  const [width, setWidth] = useState<number>(500)

  useEffect(() => {
    // Update width on resize
    const handleResize = () => {
      const containerWidth = document.getElementById('wordcloud-container')?.clientWidth
      if (containerWidth) {
        setWidth(containerWidth)
      }
    }

    handleResize() // Initial width on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='wordcloud grow-on-hover' id='wordcloud-container'>
      <Wordcloud
        words={words}
        width={width}
        height={400}
        fontSize={fontSizeSetter}
        font={'Arial'}
        padding={4}
        spiral={'rectangular'}
        rotate={0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
    </div>
  )
}