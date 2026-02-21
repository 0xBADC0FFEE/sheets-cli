import { describe, expect, mock, test } from "bun:test";
import type { sheets_v4 } from "googleapis";
import { createSpreadsheet } from "../sheets";

describe("createSpreadsheet", () => {
  test("calls spreadsheets.create with title and returns result", async () => {
    const createMock = mock(() =>
      Promise.resolve({
        data: {
          spreadsheetId: "abc123",
          spreadsheetUrl: "https://docs.google.com/spreadsheets/d/abc123/edit",
          properties: { title: "My Sheet" },
        },
      })
    );

    const sheets = {
      spreadsheets: { create: createMock },
    } as unknown as sheets_v4.Sheets;

    const result = await createSpreadsheet(sheets, "My Sheet");

    expect(createMock).toHaveBeenCalledWith({
      requestBody: { properties: { title: "My Sheet" } },
    });
    expect(result).toEqual({
      spreadsheetId: "abc123",
      spreadsheetUrl: "https://docs.google.com/spreadsheets/d/abc123/edit",
      title: "My Sheet",
    });
  });
});
