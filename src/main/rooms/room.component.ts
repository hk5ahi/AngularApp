import { Component } from '@angular/core';
import { Room } from '../customDataTypes/Room';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-user',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  rooms: Room[] = [];
  disabled: boolean = false;

  constructor(private roomService: RoomsService) { }

  showRooms() {
    this.roomService.getRooms().subscribe((data: Room[]) => {
      this.rooms = data;
    });

    this.disabled = true;
  }

  addRoom() {
    this.roomService.addRoom();
  }

  hideRooms() {
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
