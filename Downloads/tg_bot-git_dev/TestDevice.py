import unittest
from Device import Device


class TestDevice(unittest.TestCase):
    def setUp(self, device_id):
        self.device = Device(device_id)

    def test_something(self):
        self.assertEqual(True, False)  # add assertion here


if __name__ == '__main__':
    unittest.main()
