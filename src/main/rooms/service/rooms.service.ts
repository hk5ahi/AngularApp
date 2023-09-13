import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Room } from "../../customDataTypes/Room";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get<Room[]>('/api/rooms');
  }

  addRoom() {
    this.http.post('/api/rooms', {}).subscribe((data) => {

    });
  }

  updateRoom(rooms: Room[]) {
    if (rooms.length === 0) {
      console.error('No rooms available to update.');
      return; // Exit early if there are no rooms
    }

    const lastRoomNumber = rooms[rooms.length - 1].roomNumber;
    const updateUrl = `/api/rooms/${lastRoomNumber}`;

    this.http.put(updateUrl, {}).subscribe((data) => {

    });
  }

  deleteRoom(rooms: Room[]) {
    if (rooms.length === 0) {
      console.error('No rooms available to delete.');
      return; // Exit early if there are no rooms
    }

    const lastRoomNumber = rooms[rooms.length - 1].roomNumber;
    const updateUrl = `/api/rooms/${lastRoomNumber}`;

    this.http.delete(updateUrl).subscribe((data) => {

    });
  }
}
