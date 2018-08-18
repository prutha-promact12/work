using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "time",
                table: "ChatMessage",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "time",
                table: "ChatMessage");
        }
    }
}
