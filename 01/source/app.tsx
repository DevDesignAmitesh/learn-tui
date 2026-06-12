import React, { useState } from 'react';
import { Screen } from './types.js';
import { EntryScreen } from './screens/entry.js';
import { CreateRoomScreen } from "./screens/create-room.js";
import { WaitingAreaScreen } from './screens/waiting-area.js';


export default function App() {
	const [screen, setScreen] = useState<Screen>("waiting_area")

	function handleRoomJoin(name: string, room_code: string) {
		console.log('name', name);
		console.log('room_code', room_code);

		// TODO: send request to the server (ws) for joining room
		// this will depend on the payload we will recevie from the WebSocket Server
		// setScreen("waiting_area") || setScreen("running_game");
	}	

	function handleRoomCreation(name: string, room_name: string) {
		console.log('name', name);
		console.log('room_name', room_name);

		// TODO: send request to the server (ws) for creating room
		setScreen("waiting_area")
	}	

	// TODO:
		// 2. adding rest of the screens

	if (screen === "auth") {
		return <EntryScreen handleRoomJoin={handleRoomJoin} setScreen={setScreen} />
	} else if (screen === "create_room") {
		return <CreateRoomScreen handleRoomCreation={handleRoomCreation} setScreen={setScreen} />
	} 
		else if (screen === "waiting_area") {
		return <WaitingAreaScreen setScreen={setScreen} />
	} 
	// else if (screen === "running_game") {
	// 	return <EntryScreen handleSubmit={handleSubmit} setScreen={setScreen} />
	// }
}
