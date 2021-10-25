import datetime
class Student:
    def __init__(self, surname, name, group):  #maybe something else
        self.surname = surname
        self.name = name
        self.group = group

class Device:
    def __init__(self, device_id):
        self.id = device_id
        self.owner = None
        self.capture_end_time = datetime.datetime.now()

    def capture(self, student, desired_minute_time):
        current_time = datetime.datetime.now()
        capture_time = datetime.timedelta(0, 0, 0, 0, desired_minute_time)
        if self.capture_end_time < current_time and not self.owner:
            self.owner = student
            self.capture_end_time = current_time + capture_time
            return True
        else:
            return False

    def unlock(self, student):
        if self.owner == student:
            self.capture_end_time = datetime.datetime.now()
            self.owner = None
            return True
        else:
            return False

    def setup_unlock_timer(self):
        if self.capture_end_time >= datetime.datetime.now():
            self.owner = None
            return True
        else:
            return False

    def unlock_handler(self):

        return