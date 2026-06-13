import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';

export function GameRoomScreen() {
  // if (typeof window === "undefined") return;
  
  const [sentence, setSentence] = useState<string>(
    `The electric guitar echoed softly through the quiet fog-covered valley I just realized the secret to inner peace is simply avoiding pigeons on a windy day`
  );
  const [counter, setCounter] = useState(0);
  const [query,  setQuery] = useState<string>("");
  
  function handleCheck(val: string) {
    let to_check_from = sentence.split(" ");
        
    if (val === to_check_from[0] + " ") {
      to_check_from.shift();
      setSentence(to_check_from.join(" "))
      setCounter(p => p + 1);
      setQuery("")
      setSentence(p => p + "How many words your brain processes while reading text, calculated by dividing the total words in the text by the minutes it took you to read it")
    }
  }
  
  useEffect(() => {
    handleCheck(query);
  }, [query]);

  useInput((input, key) => {
		if (key.ctrl && input === "w") {
			setQuery("")
		} else if (key.delete) {
			setQuery(p => p.slice(0, -1))
		} else {
			setQuery(p => p + input)
		}
  });

	return (
		<Box
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			width={'100%'}
			borderStyle={'single'}
			borderColor={'blue'}
			display="flex"
		>
			<Text dimColor italic color={'whiteBright'}>
				game room ({counter})
			</Text>

			{/* <Text dimColor italic color={'whiteBright'}>
				Use ↑ and ↓ for Input Boxes
			</Text>
			<Text dimColor italic color={'whiteBright'}>
				and TAB for Buttons
			</Text> */}

			<Box
				marginTop={2}
				width={'50%'}
				borderStyle={'doubleSingle'}
				borderColor={'cyanBright'}
			>
				<Text wrap='truncate-end'>{sentence}</Text>
			</Box>

			<Box
				width={'50%'}
				borderStyle={'doubleSingle'}
				borderColor={'cyanBright'}
			>
				<Text>{query}</Text>
			</Box>

      {/* its a border */}
			{/* <Box
				width={'100%'}
				borderColor={'grey'}
				borderLeft={false}
				borderRight={false}
				borderBottom={false}
				borderStyle={'single'}
			/> */}
		</Box>
	);
}
