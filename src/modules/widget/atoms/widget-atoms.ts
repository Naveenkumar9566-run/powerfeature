import { atom } from "jotai";
import { WidgetScreen } from "@/modules/widget/types";
import { atomFamily, atomWithStorage } from "jotai/utils"
import { Conversation } from "@/generated/prisma";

//Basic widget state atoms
export const screenAtom = atom<WidgetScreen>("loading");
export const organizationIdAtom = atom<string | null>(null);
// Atom family for contact session IDs
export const contactSessionIdAtomFamily = atomFamily((sessionId: string) => atom<string | null>(sessionId));
//add error
export const errorMessageAtom = atom<string | null>(null);
export const loadingMessageAtom = atom <string | null>(null);
export const conversationsAtom = atom <Conversation[]> ([]);


