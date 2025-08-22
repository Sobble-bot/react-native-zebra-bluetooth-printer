declare module "@greeendev/react-native-zebra-bluetooth-printer" {
  export interface BluetoothDevice {
    name: string;
    address: string;
    [key: string]: any; // fallback for extra fields
  }

  export interface RNZebraBluetoothPrinter {
    /**
     * Check if Bluetooth is enabled.
     * Returns true if already enabled, false otherwise.
     */
    isEnabledBluetooth(): Promise<boolean>;

    /**
     * Enable Bluetooth on the device.
     * Android: prompts user for permission.
     * iOS: resolves with null.
     */
    enableBluetooth(): Promise<any>;

    /**
     * Disable Bluetooth.
     * Android: disables if enabled.
     * iOS: resolves with null.
     */
    disableBluetooth(): Promise<any>;

    /**
     * Scan for nearby devices.
     * Returns an array of BluetoothDevice objects.
     */
    scanDevices(): Promise<BluetoothDevice[]>;

    /**
     * Get already paired devices.
     * Android: returns paired devices.
     * iOS: resolves with null.
     */
    pairedDevices(): Promise<BluetoothDevice[]>;

    /**
     * Connect to a device by address (MAC on Android, UUID on iOS).
     */
    connectDevice(deviceAddress: string): Promise<any>;

    /**
     * Unpair/disconnect a device.
     * Android: unpairs from list.
     * iOS: resolves with null.
     */
    unpairDevice(deviceAddress: string): Promise<any>;

    /**
     * Print a ZPL (or CPCL on Android) string.
     * On Android, requires device address.
     * On iOS, only requires the ZPL string.
     */
    print(deviceAddress: string, zpl: string): Promise<any>;
    print(zpl: string): Promise<any>; // iOS overload
  }

  const RNZebraBluetoothPrinter: RNZebraBluetoothPrinter;
  export default RNZebraBluetoothPrinter;
}
