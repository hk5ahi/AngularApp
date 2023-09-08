import { Component } from '@angular/core';
import { Rooms } from '../customDataTypes/Rooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-user',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  rooms: Rooms[] = [];
  disabled: boolean = false;

  constructor(private roomService: RoomsService) { }

  showRoomsFromAPI() {
    this.roomService.getRooms().subscribe((data: Rooms[]) => {
      this.rooms = data;
    });

    this.disabled = true;
  }

  addRoom() {
    this.roomService.addRoom();
  }

  hideRoomsFromAPI() {
    this.rooms = [];
    this.disabled = false;
  }

  updateRoom() {
    this.roomService.updateRoom(this.rooms);
  }

  deleteRoom() {
    this.roomService.deleteRoom(this.rooms);
  }
}
