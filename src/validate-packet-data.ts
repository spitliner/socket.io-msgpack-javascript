import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import { PacketType } from './packet-format';

function validatePacketData(packet: Record<string, unknown>) {
    switch (packet.type) {
        case PacketType.CONNECT: {
            return undefined === packet.data || isObject(packet.data);
        }

        case PacketType.DISCONNECT: {
            return undefined === packet.data;
        }

        case PacketType.CONNECT_ERROR: {
            return isString(packet.data) || isObject(packet.data);
        }

        default: {
            return Array.isArray(packet.data);
        }
    }
}

export default validatePacketData;
