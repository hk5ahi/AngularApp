import {Component, OnInit} from '@angular/core';
import {RoomFromAPI} from "../../roomFromAPI";
import {RoomsService} from "./Service/rooms.service";

@Component({
  selector: 'app-user',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  rooms:RoomFromAPI[]=[];
  disabled:boolean=false;

  constructor(private roomService:RoomsService) { }
  showRoomsFromAPI()
  {
    this.roomService.getRooms().subscribe((data: RoomFromAPI[]) => {
      this.rooms = data;
    });

    this.disabled=true;

  }
  addRoom() {
    this.roomService.addRoom();

  }
  hideRoomsFromAPI()
  {
    this.rooms=[];
    this.disabled=false;
  }

  updateRoom() {
    this.roomService.updateRoom(this.rooms);
  }
 deleteRoom() {
    this.roomService.deleteRoom(this.rooms);
 }



}
