import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import { Screen, CreateRoomScreenInput } from '../types.js';
import { Button } from '../components/button.js';

export function WaitingAreaScreen({
  handleRoomCreation,
  handleCancelRoom,
  handleLeaveRoom,
}: {
  handleRoomCreation: (name: string, room_name: string) => void; 
  handleCancelRoom: (input: Screen) => void;
  handleLeaveRoom: (input: Screen) => void;
}) {

  const name = "Amitesh";
  
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
        waiting area (wait for admin to start the game) 
      </Text>
      
			<Text dimColor italic color={'whiteBright'}>
				use TAB for Buttons
			</Text>


			<Box
				width={'20%'}
        // height={4}
        // paddingY={1}
        display='flex'
        alignItems='center'
        // justifyContent='center'
        gap={1}
        borderStyle={'single'}
				borderColor={'cyan'}
			>
        <Box
          // width={2}
          // height={2}
          paddingX={2}
          borderStyle={'single'}
          borderColor={'cyan'}
			  > 
          <Text>{name[0]}</Text>
        </Box>

        <Text>{name}</Text>
      </Box>

      <Button label='start room' action={() => {}} />

      <Box 
        width={"100%"} 
        borderColor={'grey'} 
        borderLeft={false} 
        borderRight={false} 
        borderBottom={false} 
        borderStyle={'single'} 
      />
      
      <Button label='leave room' action={() => {}} />
      <Button label='cancel room' action={() => {}} />
		</Box>
	);
}
