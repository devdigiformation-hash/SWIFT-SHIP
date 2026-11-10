import sequencesData from './sequences.json';
import { SequenceManifest } from '../types/sequence';

export const sequences: SequenceManifest[] = sequencesData as SequenceManifest[];

export function getSequenceById(id: string): SequenceManifest | undefined {
  return sequences.find((s) => s.id === id);
}

export function getSequenceByNumber(num: number): SequenceManifest | undefined {
  return sequences.find((s) => s.sequenceNumber === num);
}
