import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Rooms } from "../../customDataTypes/Rooms";


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  toBeAddedRoom: Rooms = {
    roomNumber: "4",
    roomType: "double",
    amenities: "tv,bed",
    price: 100,
    photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Froom&psig=AOvVaw0QZ2Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1629788455744000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
    checkInTime: new Date("2021-08-24"),
    checkOutTime: new Date("2021-08-25"),
    rating: 5,
  }

  toBeUpdatedRoom: Rooms = {
    roomNumber: "5",
    roomType: "double",
    amenities: "tv,bed,art",
    price: 1000,
    photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Froom&psig=AOvVaw0QZ2Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1629788455744000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqHgvICFQAAAAAdAAAAABAD",
    checkInTime: new Date("2021-08-24"),
    checkOutTime: new Date("2021-08-25"),
    rating: 4.25,
  }

  constructor( private http: HttpClient) {
  }

  getRooms() {
    return this.http.get<Rooms[]>('/api/rooms');
  }

  addRoom() {
    this.http.post('/api/rooms', this.toBeAddedRoom).subscribe((data) => {

    });
  }

  updateRoom(rooms: Rooms[]) {
    if (rooms.length === 0) {
      console.error('No rooms available to update.');
      return; // Exit early if there are no rooms
    }

    const lastRoomNumber = rooms[rooms.length - 1].roomNumber;
    const updateUrl = `/api/rooms/${lastRoomNumber}`;

    this.http.put(updateUrl, this.toBeUpdatedRoom).subscribe((data) => {

    });
  }

  deleteRoom(rooms: Rooms[]) {
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
